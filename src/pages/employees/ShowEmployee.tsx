import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/supabaseClient";

import type { Employee } from "@/types/Employee";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ShowEmployee = () => {
  const { id: userId } = useParams();
  if (!userId) return;

  const { t } = useTranslation("show_employee");
  const navigate = useNavigate();

  const [employee, setEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    const getEmployee = async () => {
      const { data } = await supabase
        .from("employees")
        .select()
        .eq("id", userId)
        .single();

      setEmployee(data as unknown as Employee);
    };

    getEmployee();
  }, []);

  return (
    <div>
      <p> ShowEmployee</p>
      <Label>{t('nickname')}</Label>
      <p>{employee?.nickname}</p>
      <p>id: {userId}</p>

      <p>name: {employee?.nickname}</p>
      <p>email: {employee?.email}</p>
      <p>birthday: {employee?.birthday}</p>
      <Button onClick={() => navigate(`/employees/edit/${userId}`)}>{t('edit')}</Button>
      <Button onClick={() => navigate(-1)}>{t('back')}</Button>
    </div>
  );
};

export default ShowEmployee;
