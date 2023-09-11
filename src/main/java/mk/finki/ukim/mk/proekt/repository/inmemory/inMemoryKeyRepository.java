package mk.finki.ukim.mk.proekt.repository.inmemory;

import mk.finki.ukim.mk.proekt.data.DataHolder;
import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.repository.KeyRepository;
import org.springframework.stereotype.Repository;

import javax.xml.crypto.Data;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


public class inMemoryKeyRepository implements KeyRepository {
    @Override
    public Key save(Key key) {
        this.findById(key.getName()) .ifPresent(DataHolder.keyList::remove);
        DataHolder.keyList.add(key);
        return key;
    }

    @Override
    public List<Key> findAll() {
        return new ArrayList<>(DataHolder.keyList);
    }

    @Override
    public List<Key> findByPrice(int price) {
        return DataHolder.keyList.stream()
                .filter(key -> key.getPrice() == price)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Key> findById(String name) {
        return DataHolder.keyList.stream()
                .filter(key -> key.getName().equals(name))
                .findFirst();
    }

    @Override
    public void deleteById(String name) {
        this.findById(name).ifPresent(DataHolder.keyList::remove);
    }
}
