<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddContactsToIotSolutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('iot_solutions', function (Blueprint $table) {
            if (!Schema::hasColumn('iot_solutions', 'contacts')) {
                $table->text('contacts')->nullable()->after('description');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('iot_solutions', function (Blueprint $table) {
            //
        });
    }
}
