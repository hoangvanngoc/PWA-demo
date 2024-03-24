<template>
    <div>
        <div class="container">
			<header>
				<h1>MyPage</h1>
			</header>
			<div class="loginForm">
				<img id="profile" class="profile" src="/images/profile.png" alt="Profile Picture">
				<form method="POST" action="#">
					<input id="username" class="username" type="text" name="username" value="Username" autocomplete="off"><br>
					<input id="password" class="password" type="password" name="password" value="Password" autocomplete="off"><br>
					
					<input id="remember" class="remember" type="checkbox" name="Vehicle" value="remember">
					<label for="remember">Remember Me</label>
					<input id="submit" class="submit" type="submit" name="submit" value="Login">
				</form>
				<a class="recovery" href="#">Forgot Password&#63;</a>
			</div>
			
		</div>
    </div>
</template>
<script setup>
    function mainFunction() {
	var user = document.getElementById("username");
	var pass = document.getElementById("password");

	/*======Username field autofill events======*/
	user.onfocus = function () {
		if (user.value === "Username") {
			user.value = "";
		}
	};
	user.onblur = function () {
		if (user.value === "") {
			user.value = "Username";
		}
	};
	/*==========================================*/
	/*======Password field autofill events======*/
	pass.onfocus = function () {
		if (pass.value === "Password") {
			pass.value = "";
		}
	};
	pass.onblur = function () {
		if (pass.value === "") {
			pass.value = "Password";
		}
	};
	/*==========================================*/
}

 onMounted(() => {
    mainFunction();
 })
</script>