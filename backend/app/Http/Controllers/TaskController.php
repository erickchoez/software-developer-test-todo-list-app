<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $query = Task::where('user_id', $user->id);

        if ($request->has('status') && $request->status !== '') {
            $query->where('status', $request->status);
        }

        if ($request->get('sortBy') === 'due_date') {
            $query->orderBy('due_date', 'asc');
        } else {
            $query->orderBy('order', 'asc');
        }

        return $query->get();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'due_date' => 'nullable|date',
            'order' => 'nullable|integer',
        ]);

        $task = Task::create(array_merge($data, ['user_id' => $request->user()->id]));
        return response()->json($task, 201);
    }

    public function show($uuid)
    {
        $task = Task::where('uuid', $uuid)->firstOrFail();
        $this->authorize('view', $task);
        return $task;
    }

    public function update(Request $request, $uuid)
    {
        $task = Task::where('uuid', $uuid)->firstOrFail();
        $this->authorize('update', $task);

        $data = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'description' => 'nullable|string',
            'due_date' => 'nullable|date',
            'order' => 'nullable|integer',
            'status' => 'nullable|in:pending,in progress,complete'
        ]);

        $task->update($data);
        return $task;
    }

    public function destroy($uuid)
    {
        $task = Task::where('uuid', $uuid)->firstOrFail();
        $this->authorize('delete', $task);
        $task->delete();
        return response()->json(null, 204);
    }
}
