<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seo', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('title', 255)->nullable(true);
            $table->string('alias', 255)->nullable(true);
            $table->string('keyword', 255)->nullable(true);
            $table->string('description', 500)->nullable(true);

            $table->string('table_name', 100);
            $table->integer('reference_id');

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
        Schema::dropIfExists('seo');
    }
}
