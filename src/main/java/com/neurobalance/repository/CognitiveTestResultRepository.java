package com.neurobalance.repository;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import com.neurobalance.model.CognitiveTestResult;
import com.neurobalance.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

@SuppressWarnings("unused")
public interface CognitiveTestResultRepository extends JpaRepository<CognitiveTestResult, Long> {
    List<CognitiveTestResult> findByUserOrderByTakenAtDesc(User user);
}