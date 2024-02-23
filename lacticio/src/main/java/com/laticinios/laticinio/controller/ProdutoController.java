package com.laticinios.laticinio.controller;

import com.laticinios.laticinio.model.Produto;
import com.laticinios.laticinio.service.ProdutoService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/produto")
public class ProdutoController {

    private final ProdutoService service;

    @GetMapping("/all")
    public List<Produto> getAll(){
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        service.delete(id);
    }

    @PostMapping
    public void create(@RequestBody Produto produto){
        service.create(produto);
    }
}
