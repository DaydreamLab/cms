<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBrandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brands', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code');
            $table->string('alias');
            $table->string('title')->nullable();
            $table->string('title_zhtw')->nullable();
            $table->text('description')->nullable();
            $table->string('factory_url')->nullable();
            $table->mediumText('contact')->nullable();
            $table->string('contact_email')->nullable();
            $table->string('business_representitive')->nullable();
            $table->string('logo_image')->nullable();
            $table->string('banner_image')->nullable();
            $table->string('banner_link')->nullable();
            $table->string('metatitle')->nullable();
            $table->text('metadesc')->nullable();
            $table->string('metakeywords')->nullable();
            $table->mediumText('tracking')->nullable();

            $table->tinyInteger('state')->default(1);
            $table->unsignedInteger('locked_by')->nullable()->default(0);
            $table->timestamp('locked_at')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
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
        Schema::dropIfExists('brands');
    }
}
