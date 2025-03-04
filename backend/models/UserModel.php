<?php
require_once '../config/db_config.php';

class UserModel {
    public function createUser($data) {
        global $pdo;
        $stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
        return $stmt->execute([$data['name'], $data['email'], password_hash($data['password'], PASSWORD_BCRYPT)]);
    }
}
?>
