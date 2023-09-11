package mk.finki.ukim.mk.proekt.repository.jpa;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import mk.finki.ukim.mk.proekt.repository.KeyChainRepository;
import mk.finki.ukim.mk.proekt.repository.KeyRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class KeyChainRepositoryImpl implements KeyChainRepository {

    private final JpaKeyChainRepository repository;

    public KeyChainRepositoryImpl(JpaKeyChainRepository repository){
        this.repository = repository;
    }

    @Override
    public KeyChain save(KeyChain keyChain) {
        return this.repository.save(keyChain);
    }

    @Override
    public List<KeyChain> findAll() {
        return (List<KeyChain>) this.repository.findAll();
    }

    @Override
    public List<KeyChain> findByPrice(int price) {

        return this.repository.findAll().stream()
                .filter(key -> key.getPrice() == price)
                .collect(Collectors.toList());

    }

    @Override
    public Optional<KeyChain> findById(String name) {
        return this.repository.findById(name);
    }

    @Override
    public void deleteById(String name) {
        this.repository.deleteById(name);
    }
}

