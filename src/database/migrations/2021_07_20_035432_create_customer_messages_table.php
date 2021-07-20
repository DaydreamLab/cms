<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer_messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('brand_id');
            $table->string('name');
            $table->string('type');
            $table->string('status');
            $table->string('email');
            $table->string('backupEmail')->nullable();
            $table->string('phoneCode')->nullable();
            $table->string('phone')->nullable();
            $table->string('extNumber')->nullable();
            $table->string('mobilePhoneCode')->nullable();
            $table->string('mobilePhone');
            $table->string('faxCode')->nullable();
            $table->string('fax')->nullable();
            $table->string('city')->nullable();
            $table->string('district')->nullable();
            $table->string('address')->nullable();
            $table->string('zipcode')->nullable();
            $table->text('message')->nullable();
            $table->string('companyName')->nullable();
            $table->string('jobTitle')->nullable();
            $table->string('locked_by')->nullable();
            $table->unsignedInteger('created_by');
            $table->unsignedInteger('updated_by')->nullable();
            $table->timestamp('locked_at')->nullable();
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
        Schema::dropIfExists('customer_messages');
    }
}
