SELECT * FROM simulations where id = '9884c4ca-9981-456b-9b8a-a97d1f4726fe' and created_at between (now() - interval '1 year') and now();
SELECT * FROM simulations where created_at between (now() - interval '1 year') and now();

select now();
select now() - interval '365 days';