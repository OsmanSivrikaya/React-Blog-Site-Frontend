import React, { useState } from "react";
import ModalComponent from "../components/helper-components/modal";
import FormComponent from "../components/helper-components/form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createCategory } from "/src/actions/categoryAction";
import { useDispatch } from "react-redux";

const Category = () => {
  const dispatch = useDispatch(); // Redux dispatch fonksiyonunu almak için kullanılır
  const handleFormSubmit = async (data) => {
    dispatch(createCategory(data.CategoryName));
  };

  const formBody = ({ register, errors }) => (
    <>
      <TextField
        margin="normal"
        fullWidth
        id="CategoryName"
        label="Kategori"
        name="CategoryName"
        autoComplete="CategoryName"
        autoFocus
        {...register("CategoryName", {
          required: "Kategori boş geçilemez.",
        })}
        error={!!errors.CategoryName}
        helperText={errors.CategoryName ? errors.CategoryName.message : ""}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Kaydet
      </Button>
    </>
  );

  return (
    <>
      <ModalComponent
        btnName="Kategori Ekle"
        title="Kategori Ekle"
        formContent={({ handleClose }) => (
          <FormComponent func={handleFormSubmit} body={formBody} />
        )}
      />
    </>
  );
};

export default Category;