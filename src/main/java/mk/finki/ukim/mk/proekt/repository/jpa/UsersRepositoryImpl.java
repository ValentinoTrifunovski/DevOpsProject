package mk.finki.ukim.mk.proekt.repository.jpa;

import mk.finki.ukim.mk.proekt.model.Users;
import mk.finki.ukim.mk.proekt.repository.UsersRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UsersRepositoryImpl implements UsersRepository {

    private final JpaUsersRepository usersRepository;

    public UsersRepositoryImpl(JpaUsersRepository usersRepository){
        this.usersRepository = usersRepository;
    }

    @Override
    public Users save(Users user) {
        return this.usersRepository.save(user);
    }

    @Override
    public List<Users> getAllUsers() {
        return this.usersRepository.findAll();
    }

    @Override
    public List<Users> searchUsers(String username) {
        return null;
    }

    @Override
    public Optional<Users> findById(String username) {
         return this.usersRepository.findById(username);
    }

    @Override
    public void saveAll(List<Users> usersList) {
        this.usersRepository.saveAll(usersList);
    }

    @Override
    public void deleteById(String username) {
        this.usersRepository.deleteById(username);
    }
}
