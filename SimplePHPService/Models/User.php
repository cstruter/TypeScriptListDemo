<?php

class User
{
    public $FirstName;
    public $LastName;
    public $Username;
    public function __construct($firstName, $lastName, $userName)
    {
        $this->FirstName = $firstName;
        $this->LastName = $lastName;
        $this->Username = $userName;
    }
}

?>