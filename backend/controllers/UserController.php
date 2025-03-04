<?php
require_once '../models/UserModel.php';

class UserController {
    public function register($data) {
        $userModel = new UserModel();
        return $userModel->createUser($data);
    }
}
?>
