package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;

import java.util.List;
import java.util.Optional;

public interface KeyChainRepository {

    KeyChain save(KeyChain keyChain);

    List<KeyChain> findAll();

    List<KeyChain> findByPrice(int price);

    Optional<KeyChain> findById(String name);

    void deleteById(String name);


}
