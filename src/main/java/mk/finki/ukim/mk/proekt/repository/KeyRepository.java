package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.Key;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface KeyRepository {

    Key save(Key key);

    List<Key> findAll();

    List<Key> findByPrice(int price);

    Optional<Key> findById(String name);

    void deleteById(String name);

}
