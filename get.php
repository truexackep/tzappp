$url = 'https://crm.belmar.pro/api/v1/getstatuses';
$token = 'ba67df6a-a17c-476f-8e95-bcdb75ed3958';
$data = array(
    'date_from' => '2023-05-24 00:00:00',
    'date_to' => '2023-05-24 23:59:59',
    'page' => 0,
    'limit' => 100
);

$headers = array(
    'token: ' . $token,
    'Content-Type: application/json'
);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($curl);
if ($response === false) {
return;
}

curl_close($curl);
echo $response;