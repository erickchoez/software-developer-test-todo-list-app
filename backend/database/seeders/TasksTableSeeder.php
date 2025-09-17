<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;

class TasksTableSeeder extends Seeder
{
    public function run()
    {
        $user = User::first();
        if (! $user) return;

        Task::create([
            'title' => 'First task',
            'description' => 'This is a seeded task',
            'due_date' => Carbon::now()->addDays(3),
            'order' => 1,
            'status' => 'pending',
            'user_id' => $user->id,
        ]);
    }
}
