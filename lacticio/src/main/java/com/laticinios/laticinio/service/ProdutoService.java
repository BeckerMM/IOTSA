package com.laticinios.laticinio.service;

import com.laticinios.laticinio.model.Produto;
import com.laticinios.laticinio.repository.ProdutoRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProdutoService {

    private ProdutoRepository repository;

    public List<Produto> getAll(){
        return repository.findAll();
    }

    public void delete(Integer id){
        repository.deleteById(id);
    }

    public void create(Produto produto){
        repository.save(produto);
    }
}
