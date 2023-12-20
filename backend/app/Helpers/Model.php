<?php
namespace App\Helpers;
use Ramsey\Uuid\Uuid;
    trait Model{
        public static function setData(array $data, $model){
            $data['id'] = self::setUuid();
            $data['order'] = self::setOrder($model);
            $data['created_at'] = now();
            if(isset($data['password'])){
                $data['password'] = bcrypt($data['password']);
            }
            return $model::create($data);
        }

        private static function updatedata($model,array $data, array $where){
            $data['updated_at'] = now();
            return $model::where($where)->update($data);
        }

        private static function setUuid(){
            return Uuid::uuid7(now());
        }

        private static function setOrder($model){
            $query = $model::latest('order')->first();
            return $query ? $query->order += 1 : 1;
        }
    }