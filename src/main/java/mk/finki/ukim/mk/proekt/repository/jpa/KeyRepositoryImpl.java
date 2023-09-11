package mk.finki.ukim.mk.proekt.repository.jpa;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.repository.KeyRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class KeyRepositoryImpl implements KeyRepository {

    private final JpaKeyRepository repository;

    public KeyRepositoryImpl(JpaKeyRepository repository){
        this.repository = repository;
    }

    @Override
    public Key save(Key key) {
        return this.repository.save(key);
    }

    @Override
    public List<Key> findAll() {
        return (List<Key>) this.repository.findAll();
    }

    @Override
    public List<Key> findByPrice(int price) {

        return this.repository.findAll().stream()
                .filter(key -> key.getPrice() == price)
                .collect(Collectors.toList());

    }

    @Override
    public Optional<Key> findById(String name) {
        return this.repository.findById(name);
    }

    @Override
    public void deleteById(String name) {
        this.repository.deleteById(name);
    }
}
