package mk.finki.ukim.mk.proekt.service;

import mk.finki.ukim.mk.proekt.model.Car;
import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import mk.finki.ukim.mk.proekt.model.Users;

import java.util.List;
import java.util.Optional;

public interface UsersService {

    List<Users> getAllUsers();

    Users createUser(Users user);

    Users createUser(String username, String password);

    Optional<Users> getUser(String username);

    Users updateUser(String username, Users user);

    Users updateUserKeys(String id, String username, String password, Key key, KeyChain keyChain);

    Users updateUser(String id, String username, String password,Key key, KeyChain keyChain);

    void deleteUser(String username);

}
