package mk.finki.ukim.mk.proekt.service.impl;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import mk.finki.ukim.mk.proekt.model.Users;
import mk.finki.ukim.mk.proekt.repository.KeyRepository;
import mk.finki.ukim.mk.proekt.repository.UsersRepository;
import mk.finki.ukim.mk.proekt.service.UsersService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsersServiceImpl implements UsersService {

    UsersRepository usersRepository;
    UsersServiceImpl(UsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    @Override
    public Users createUser(Users user) {
        return this.usersRepository.save(user);
    }

    @Override
    public Users createUser(String username, String password) {
        Users user = new Users(username,password);
        return this.usersRepository.save(user);
    }

    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.getAllUsers();
    }

    @Override
    public Optional<Users> getUser(String username) {
        return this.usersRepository.findById(username);
    }

    @Override
    public Users updateUserKeys(String id, String username, String password, Key key, KeyChain keyChain) {
        Users u = usersRepository.findById(id).orElse(null);
        Users user = null;
        List<Key> keyList;
        List<KeyChain> keyChainList;
        if(u != null) {

            keyList = u.getKeyList();
            keyChainList = u.getKeyChainList();

            keyList.removeIf(key1 -> key1.getName().equals(key.getName()));
            keyChainList.removeIf(keyChain1 -> keyChain1.getName().equals(keyChain.getName()));

            user = new Users(u.getUsername(),password,keyList,keyChainList);
        }
        return this.usersRepository.save(user);
    }

    @Override
    public Users updateUser(String id, String username, String password, Key key, KeyChain keyChain) {
        Users u = usersRepository.findById(username).orElse(null);

        if(u != null) {

            u.setPassword(password);

            if (!key.getName().equals(""))
                u.addToList(key);

            if (!keyChain.getName().equals(""))
                u.addKeychainToList(keyChain);
        }
        return this.usersRepository.save(u);
    }

    @Override
    public Users updateUser(String username, Users user) {
        Users u = usersRepository.findById(username).orElse(null);
        if(u != null) {
            u.setUsername(user.getUsername());
            u.setPassword(user.getPassword());
        }
        return u;
    }

    @Override
    public void deleteUser(String username) {
         this.usersRepository.deleteById(username);
    }
}
