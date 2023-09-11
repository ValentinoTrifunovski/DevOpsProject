package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.Car;
import mk.finki.ukim.mk.proekt.model.Users;

import java.util.List;
import java.util.Optional;

public interface UsersRepository {

    Users save(Users user);

    List<Users> getAllUsers();

    List<Users> searchUsers(String username);

    Optional<Users> findById(String username);

    void saveAll(List<Users> usersList);

    void deleteById(String username);

}
