package mk.finki.ukim.mk.proekt.service.impl;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.repository.KeyRepository;
import mk.finki.ukim.mk.proekt.service.KeyService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class KeyServiceImpl implements KeyService {

    KeyRepository keyRepository;
    KeyServiceImpl(KeyRepository keyRepository){
        this.keyRepository = keyRepository;
    }

    @Override
    public Key createKey(String name, double size, String description, int price, boolean onStock,String imageUrl) {
        Key key = new Key(name,size,description,price,onStock,imageUrl);
        return this.keyRepository.save(key);
    }

    @Override
    public Key createKey(Key k) {
        return this.keyRepository.save(k);
    }

    @Override
    public List<Key> getAllKeys() {
        return keyRepository.findAll();
    }

    @Override
    public List<Key> searchKeys(int price) {
        return keyRepository.findByPrice(price);
    }

    @Override
    public List<Key> searchOnStockKeys(boolean onStock) {
        return keyRepository.findAll().stream()
                .filter(key -> key.isOnStock() == onStock)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Key> getKey(String name) {
        return keyRepository.findById(name);
    }

    @Override
    public List<Key> searchKeyBySize(Double size) {
        return keyRepository.findAll().stream()
                .filter(key -> key.getSize() == size)
                .collect(Collectors.toList());
    }

    @Override
    public List<Key> searchKeyByPrice(int price) {
        return keyRepository.findAll().stream()
                .filter(key -> key.getPrice() == price)
                .collect(Collectors.toList());
    }

    @Override
    public List<Key> searchOnStock(boolean onStock) {
        return keyRepository.findAll().stream()
                .filter(key -> key.isOnStock() == onStock)
                .collect(Collectors.toList());
    }

    @Override
    public List<Key> searchKeyByPriceAndSize(int price, Double size) {
        return keyRepository.findAll().stream()
                .filter(key -> key.getPrice()==price && key.getSize()==size)
                .collect(Collectors.toList());
    }

    @Override
    public Key updateKey(String name, double size, String description, int price, boolean onStock,String imageUrl) {
        Key key = keyRepository.findById(name).orElse(null);
        if(key != null) {
            key.setSize(size);
            key.setDescription(description);
            key.setPrice(price);
            key.setOnStock(onStock);
            key.setImageUrl(imageUrl);
        }
        return key;
    }

    @Override
    public Key updateKey(String name, Key k) {
        Key key = keyRepository.findById(name).orElse(null);
        if(key != null) {
            key.setSize(k.getSize());
            key.setDescription(k.getDescription());
            key.setPrice(k.getPrice());
            key.setOnStock(k.isOnStock());
        }
        return key;
    }

    @Override
    public void deleteKey(String name) {
        keyRepository.deleteById(name);
    }
}
