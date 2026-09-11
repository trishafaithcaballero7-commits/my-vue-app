<template>
  <div>
    <h2>Student Profile</h2>
    <p>Name: {{ name }}</p>
    <p>Age: {{ age }}</p>
    <p>Student ID: {{ studentId }}</p>
    <p>Course: {{ course }}</p>
    <p>Year Level: {{ yearLevel }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Trisha Faith Caballero",
      age: 20,
      studentId: "YOUR STUDENT ID",
      course: "BSIT",
      yearLevel: "3rd Year"
    }
  }
}
</script>