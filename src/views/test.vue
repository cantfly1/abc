<template>
    <h1>H</h1>
</template>
<script>
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('http://localhost:8081/', function(req, res) {
  res.send('hello world');
});


</script>
