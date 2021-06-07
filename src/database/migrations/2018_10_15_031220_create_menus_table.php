<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('alias');
            $table->nestedSet();
            $table->unsignedInteger('ordering')->nullable();
            $table->string('path');
            $table->string('host');
            $table->unsignedInteger('site_id')->default(0);
            $table->unsignedInteger('category_id')->nullable();
            $table->tinyInteger('state')->default(1);
            $table->text('description')->nullable();
            $table->unsignedTinyInteger('hidden')->default(0);
            $table->unsignedInteger('access')->nullalbe()->default(1);
            $table->string('language')->nullable()->default('*');
            $table->text('params')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
            $table->timestamps();
            $table->timestamp('publish_up')->nullable();
            $table->timestamp('publish_down')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menus');
    }
}
