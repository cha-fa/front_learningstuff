import { Button } from "bootstrap";
import React, { useState } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";
import { useLocation, useParams } from "react-router";

const Recover = (props) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const params = useParams();
  const reset_password_token = useLocation().search.split("=")[1];
  return (
    <div className="Recover">
      <Form
        className="m-5 d-flex flex-column justify-content-around"
        // onSubmit={login}
      >
        <FormGroup>
          <FormControl
            className="p-4 mb-3"
            type="email"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            className="p-4 mb-3"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit" className="ButtonPrimary w-75" size="lg" block>
          Ok
        </Button>
      </Form>
    </div>
  );
};

export default Recover;

/* 

<h2>Change your password</h2>

<%= form_for(resource, as: resource_name, url: password_path(resource_name), html: { method: :put }) do |f| %>
  <%= render "devise/shared/error_messages", resource: resource %>
  <%= f.hidden_field :reset_password_token %>

  <div class="field">
    <%= f.label :password, "New password" %><br />
    <% if @minimum_password_length %>
      <em>(<%= @minimum_password_length %> characters minimum)</em><br />
    <% end %>
    <%= f.password_field :password, autofocus: true, autocomplete: "new-password" %>
  </div>

  <div class="field">
    <%= f.label :password_confirmation, "Confirm new password" %><br />
    <%= f.password_field :password_confirmation, autocomplete: "new-password" %>
  </div>

  <div class="actions">
    <%= f.submit "Change my password" %>
  </div>
<% end %>

*/
