$url = 'https://crm.belmar.pro/api/v1/addlead';
$token = 'ba67df6a-a17c-476f-8e95-bcdb75ed3958';
$data = array(
'firstName' => $_POST['firstName'],
'lastName' => $_POST['lastName'],
'phone' => $_POST['phone'],
'email' => $_POST['email'],
'countryCode' => 'ru',
'box_id' => '28',
'offer_id' => '3',
'landingUrl' => 'test.com',
'ip' => $_SERVER['REMOTE_ADDR'],
'password' => 'qwerty12',
'language' => 'ru',
'clickId' => 'test',
'quizAnswers' => '',
'custom1' => '',
'custom2' => '',
'custom3' => ''
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
'token: ' . $token,
'Content-Type: application/json'
));

$response = curl_exec($ch);

if ($response === false) {
$error = curl_error($ch);

} else {
return $response;
}

curl_close($ch);