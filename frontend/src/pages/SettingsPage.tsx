"use client";

import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    contactName: "",
    contactEmail: ""
  });

  const [securitySettings, setSecuritySettings] = useState({
    currentPassword: "",
    newPassword: ""
  });

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle general settings save
    console.log("Saving general settings:", generalSettings);
  };

  const handleSecuritySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle security settings save
    console.log("Saving security settings");
    setSecuritySettings({ currentPassword: "", newPassword: "" });
  };

  return (
    <div className="space-y-8" data-oid="0oy4ikf">
      {/* General Settings */}
      <Card title="Configurações Gerais" data-oid="t:ux243">
        <form
          onSubmit={handleGeneralSubmit}
          className="space-y-6"
          data-oid="orur_yb">

          <Input
            label="Nome do Contato"
            placeholder="Nome Completo"
            value={generalSettings.contactName}
            onChange={(e) =>
            setGeneralSettings({
              ...generalSettings,
              contactName: e.target.value
            })
            }
            data-oid="-.r9es1" />


          <Input
            label="E-mail de Contato"
            type="email"
            placeholder="email@exemplo.com"
            value={generalSettings.contactEmail}
            onChange={(e) =>
            setGeneralSettings({
              ...generalSettings,
              contactEmail: e.target.value
            })
            }
            data-oid="zdke_f_" />


          <div className="flex justify-end" data-oid="cz6q1f.">
            <Button type="submit" data-oid="9ewm0e3">
              Salvar Alterações
            </Button>
          </div>
        </form>
      </Card>

      {/* Security Settings */}
      <Card title="Configurações de Segurança" data-oid="x-_9dqx">
        <form
          onSubmit={handleSecuritySubmit}
          className="space-y-6"
          data-oid="g4q7pnp">

          <Input
            label="Senha Atual"
            type="password"
            placeholder="••••••••"
            value={securitySettings.currentPassword}
            onChange={(e) =>
            setSecuritySettings({
              ...securitySettings,
              currentPassword: e.target.value
            })
            }
            data-oid="2p3_xx2" />


          <Input
            label="Nova Senha"
            type="password"
            placeholder="••••••••"
            value={securitySettings.newPassword}
            onChange={(e) =>
            setSecuritySettings({
              ...securitySettings,
              newPassword: e.target.value
            })
            }
            data-oid="3jr3vjr" />


          <div className="flex justify-end" data-oid="lp4e7gq">
            <Button type="submit" data-oid="fquonsv">
              Alterar Senha
            </Button>
          </div>
        </form>
      </Card>
    </div>);

}