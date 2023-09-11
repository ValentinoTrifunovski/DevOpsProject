package mk.finki.ukim.mk.proekt.web.api;

import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import mk.finki.ukim.mk.proekt.model.Users;
import mk.finki.ukim.mk.proekt.service.KeyService;
import mk.finki.ukim.mk.proekt.service.UsersService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "/api/users")
public class UsersApi {

    private final UsersService usersService;
    public UsersApi(UsersService usersService){
        this.usersService = usersService;
    }

    @GetMapping
    public List<Users> getAllUsers(){
        return usersService.getAllUsers();
    }
    @GetMapping("/{id}")
    public Optional<Users> getUser(@PathVariable String id){
        return usersService.getUser(id);
    }

    @PatchMapping("/{id}")
    public Users updateUser(@PathVariable String id,
                            @RequestParam(value = "password", required = false) String password,
                            @RequestParam(value = "nameKey", required = false) String keyName,
                            @RequestParam(value = "sizeKey", required = false, defaultValue = "1") double keySize,
                            @RequestParam(value = "descriptionKey", required = false) String keyDescription,
                            @RequestParam(value = "priceKey", required = false, defaultValue = "1") int keyPrice,
                            @RequestParam(value = "onStockKey", required = false) boolean keyOnStock,
                            @RequestParam(value = "imageUrlKey", required = false) String keyImageUrl,
                            @RequestParam(value = "nameKeychain", required = false) String keychainName,
                            @RequestParam(value = "descriptionKeychain", required = false) String keychainDescription,
                            @RequestParam(value = "priceKeychain", required = false, defaultValue = "1") int keychainPrice,
                            @RequestParam(value = "onStockKeychain", required = false) boolean keychainOnStock,
                            @RequestParam(value = "imageUrlKeychain", required = false) String keychainImageUrl){
        return usersService.updateUser(id,id,password,new Key(keyName,keySize,keyDescription,keyPrice,keyOnStock,keyImageUrl), new KeyChain(keychainName,keychainDescription,keychainPrice,keychainOnStock,keychainImageUrl));
    }

    @PutMapping("/{id}")
    public Users updateUserKeys(@PathVariable String id,
                            @RequestParam(value = "password", required = false) String password,
                            @RequestParam(value = "nameKey", required = false) String keyName,
                            @RequestParam(value = "sizeKey", required = false, defaultValue = "1") double keySize,
                            @RequestParam(value = "descriptionKey", required = false) String keyDescription,
                            @RequestParam(value = "priceKey", required = false, defaultValue = "1") int keyPrice,
                            @RequestParam(value = "onStockKey", required = false) boolean keyOnStock,
                            @RequestParam(value = "imageUrlKeychain", required = false) String keyImageUrl,
                                @RequestParam(value = "nameKeychain", required = false) String keychainName,
                                @RequestParam(value = "descriptionKeychain", required = false) String keychainDescription,
                                @RequestParam(value = "priceKeychain", required = false, defaultValue = "1") int keychainPrice,
                                @RequestParam(value = "onStockKeychain", required = false) boolean keychainOnStock,
                                @RequestParam(value = "imageUrlKeychain", required = false) String keychainImageUrl){
                                            return usersService.updateUserKeys(id,id,password,
                                            new Key(keyName,keySize,keyDescription,keyPrice,keyOnStock,keyImageUrl),
                                            new KeyChain(keychainName,keychainDescription,keychainPrice,keychainOnStock,keychainImageUrl));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Users addUser(@RequestBody Users user){
        return usersService.createUser(user);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id){
        usersService.deleteUser(id);
    }
}
