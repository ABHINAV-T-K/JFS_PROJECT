package contactapp.contact.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import contactapp.contact.Model.User;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findByNameContainingIgnoreCase(String name);
    List<User> findByEmailContainingIgnoreCase(String email);
    List<User> findByNumberContaining(String number);
}


