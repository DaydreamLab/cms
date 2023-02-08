<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sites', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title');
            $table->string('url');
            $table->string('sitename');
            $table->string('sef');
            $table->text('metakeywords')->nullable();
            $table->text('metadesc')->nullable();
            $table->unsignedTinyInteger('state')->nulalble()->default(1);
            $table->unsignedInteger('access')->default(1);
            $table->unsignedBigInteger('ordering')->nullable();
            $table->unsignedBigInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedBigInteger('created_by');
            $table->unsignedBigInteger('updated_by')->nullable();
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
        Schema::dropIfExists('sites');
    }
}
