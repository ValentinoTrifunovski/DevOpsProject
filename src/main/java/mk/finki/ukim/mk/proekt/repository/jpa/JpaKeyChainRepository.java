package mk.finki.ukim.mk.proekt.repository.jpa;

import mk.finki.ukim.mk.proekt.model.KeyChain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JpaKeyChainRepository extends JpaRepository<KeyChain,String> {
}
