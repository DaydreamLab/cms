<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnSearchFulltextToItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // 如果有配置要使用全文索引，才加入 full_text_search field
        if (config('cms.item.use_word_segmentation')) {
            Schema::table('items', function (Blueprint $table) {
                $table->text('full_text_search')->nullable()->after('description');
            });

            // 增加全文檢索索引到full_text_search上
            \Illuminate\Support\Facades\DB::statement('ALTER TABLE items ADD FULLTEXT INDEX fulltext_index (full_text_search)');
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('items', function (Blueprint $table) {
            //
        });
    }
}
