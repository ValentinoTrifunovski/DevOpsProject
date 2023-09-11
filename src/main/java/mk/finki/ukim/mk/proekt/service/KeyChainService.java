package mk.finki.ukim.mk.proekt.service;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface KeyChainService {
    KeyChain createKeyChain(String name, String description, int price, boolean onStock, String imageUrl);

    KeyChain createKeyChain(KeyChain k);

    List<KeyChain> getAllKeyChains();

    List<KeyChain> searchKeyChains(int price);

    List<KeyChain> searchOnStockKeyChains (boolean onStock);

    Optional<KeyChain> getKeyChain(String name);

    void deleteKeyChain(String name);
}
