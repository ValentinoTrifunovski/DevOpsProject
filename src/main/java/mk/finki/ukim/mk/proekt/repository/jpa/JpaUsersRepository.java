package mk.finki.ukim.mk.proekt.repository.jpa;

import mk.finki.ukim.mk.proekt.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaUsersRepository extends JpaRepository<Users,String> {
}
