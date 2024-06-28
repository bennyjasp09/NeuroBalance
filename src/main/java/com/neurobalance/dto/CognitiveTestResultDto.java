package com.neurobalance.dto;

public class CognitiveTestResultDto {
    private String testType;
    private Integer score;

    // Getters and setters
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
}