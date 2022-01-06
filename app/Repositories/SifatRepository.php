<?php

namespace App\Repository;

use App\Model\sifat;
use Dotenv\Validator;

class SifatRepository {

    protected $sifat;

    public function __construct(sifat $sifat)
    {
        $this->sifat = $sifat;
    }


}
