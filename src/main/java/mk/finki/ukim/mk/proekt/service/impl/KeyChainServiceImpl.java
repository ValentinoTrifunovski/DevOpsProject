package mk.finki.ukim.mk.proekt.service.impl;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import mk.finki.ukim.mk.proekt.repository.KeyChainRepository;
import mk.finki.ukim.mk.proekt.repository.KeyRepository;
import mk.finki.ukim.mk.proekt.service.KeyChainService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class KeyChainServiceImpl implements KeyChainService {

    KeyChainRepository keyChainRepository;
    KeyChainServiceImpl(KeyChainRepository keyChainRepository){
        this.keyChainRepository = keyChainRepository;
    }

    @Override
    public KeyChain createKeyChain(String name, String description, int price, boolean onStock, String imageUrl) {
        KeyChain keyChain = new KeyChain(name,description,price,onStock,imageUrl);
        return this.keyChainRepository.save(keyChain);
    }

    @Override
    public KeyChain createKeyChain(KeyChain k) {
        return this.keyChainRepository.save(k);
    }

    @Override
    public List<KeyChain> getAllKeyChains() {
        return keyChainRepository.findAll();
    }

    @Override
    public List<KeyChain> searchKeyChains(int price) {
        return keyChainRepository.findByPrice(price);
    }

    @Override
    public List<KeyChain> searchOnStockKeyChains(boolean onStock) {
        return keyChainRepository.findAll().stream()
                .filter(keyChain -> keyChain.isOnStock() == onStock)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<KeyChain> getKeyChain(String name) {
        return keyChainRepository.findById(name);
    }

    @Override
    public void deleteKeyChain(String name) {
        keyChainRepository.deleteById(name);
    }

}
