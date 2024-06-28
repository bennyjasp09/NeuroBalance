package com.neurobalance.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "cognitive_test_results")
public class CognitiveTestResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String testType;

    @Column(nullable = false)
    private Integer score;

    @Column(nullable = false)
    private LocalDateTime takenAt;

    @PrePersist
    protected void onCreate() {
        takenAt = LocalDateTime.now();
    }

    // Constructors
    public CognitiveTestResult() {}

    public CognitiveTestResult(User user, String testType, Integer score) {
        this.user = user;
        this.testType = testType;
        this.score = score;
        this.takenAt = LocalDateTime.now();
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getTestType() {
        return testType;
    }

    public void setTestType(String testType) {
        this.testType = testType;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public LocalDateTime getTakenAt() {
        return takenAt;
    }

    public void setTakenAt(LocalDateTime takenAt) {
        this.takenAt = takenAt;
    }
}