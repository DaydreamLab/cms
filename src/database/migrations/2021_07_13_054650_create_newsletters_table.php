<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNewslettersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('newsletters', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('newsletter_category_id');
            $table->string('title');
            $table->string('alias');
            $table->string('image')->nullable();
            $table->string('number')->nullable();
            $table->text('description')->nullable();
            $table->string('url')->nullable();
            $table->tinyInteger('display_topic')->default(0);
            $table->text('information')->nullable();
            $table->text('params')->nullable();

            $table->tinyInteger('state')->default(1);
            $table->unsignedInteger('ordering')->nullable();
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
            $table->timestamp('publish_up')->nullable();
            $table->timestamp('publish_down')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('newsletters');
    }
}
