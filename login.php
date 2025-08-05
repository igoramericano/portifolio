<?php
// Certifique-se de que a requisição é um POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Agora, você faria a validação. Por exemplo, verificando em um banco de dados.
    // Este é um exemplo simples e NÃO SEGURO para produção.
    // NUNCA armazene senhas em texto puro. Use hashing (ex: password_hash()).

    if ($username === "admin" && $password === "senha123") {
        echo "Login bem-sucedido! Bem-vindo, " . htmlspecialchars($username) . "!";
        // Aqui você iniciaria uma sessão e redirecionaria o usuário
        // para uma página segura.
    } else {
        echo "Usuário ou senha incorretos.";
    }
} else {
    // Se a requisição não for POST, redireciona o usuário de volta para o formulário
    header("Location: login.html");
    exit();
}
?>