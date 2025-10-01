<?php
// Palavras separadas por categorias
$categorias = [
    "Frutas" => ["banana", "maçã", "laranja", "abacaxi", "uva", "mamão", "melancia"],
    "Países" => ["brasil", "argentina", "portugal", "japão", "canadá", "austrália"],
    "Tecnologia" => ["computador", "internet", "php", "javascript", "programador", "tecnologia"],
    "Animais" => ["cachorro", "gato", "elefante", "pássaro", "cavalo", "tartaruga"],
];

// Sorteia categoria
$categoria = array_rand($categorias);
// Sorteia palavra da categoria
$palavra = $categorias[$categoria][array_rand($categorias[$categoria])];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Jogo da Forca</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>🎮 Jogo da Forca</h1>

    <h2>Categoria: <span id="categoria"><?php echo $categoria; ?></span></h2>

    <!-- Palavra com underscores -->
    <div id="palavra"></div>

    <!-- Letras erradas -->
    <p>Letras erradas: <span id="erradas"></span></p>

    <!-- Boneco da forca -->
    <pre id="forca"></pre>

    <!-- Teclado virtual -->
    <div id="teclado"></div>

    <!-- Botão Reiniciar -->
    <button onclick="location.reload()">Reiniciar</button>

    <!-- Passando palavra para o JS -->
    <script>
        const palavraSecreta = "<?php echo $palavra; ?>";
    </script>
    <script src="script.js"></script>
</body>
</html>
