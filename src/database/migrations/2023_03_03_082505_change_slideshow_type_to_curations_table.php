<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeSlideshowTypeToCurationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('curations', function (Blueprint $table) {
            if (Schema::hasColumn('curations', 'slideshow')) {
                $table->text('slideshow')->change();
            }
            if (Schema::hasColumn('curations', 'script')) {
                $table->dropColumn('script');
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
        Schema::table('curations', function (Blueprint $table) {
            //
        });
    }
}
