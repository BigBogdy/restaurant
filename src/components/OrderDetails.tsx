import {
  Box,
  Button,
  TextField,
  Typography,
  Checkbox,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { MuiTelInput } from 'mui-tel-input';

const useStyles = makeStyles()((theme) => ({
  card: {
    width: 800,
    marginBottom: 20,
    borderRadius: 10,
    background: 'linear-gradient(90deg, #494544 0%, #504B4A 100%)}',
  },
  input: {
    '&::placeholder': {
      fontSize: 16,
    },
    '.MuiInputBase-root': {
      borderRadius: '10px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '& input': {
      fontSize: 16,
      color: 'white',
      padding: 4.5,
      fontFamily: 'Gilroy',
      fontWeight: 400,
    },
    position: 'relative',
    '& > div': {
      backgroundColor: '#504B4A',
      padding: 14,
    },
  },
  btn: {},
  btnClkd: {
    border: '1px solid #72A479',
    display: 'flex',
    justifyContent: 'center',
  },
  btnUnclkd: {
    background: 'inherit',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #72A479',
  },
  select: {
    borderRadius: '10px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

const OrderDertails: FC = () => {
  const { classes } = useStyles();

  const [value, setValue] = useState('');
  const [address, setAddress] = useState('1');

  const [deliveryType, setDeliveryType] = useState<string>('delivery');
  const [paymentType, setPaymentType] = useState<string>('cash');
  const [deliveryTime, setDeliveryTime] = useState<string>('asap');

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const onChangeAddress = (e: SelectChangeEvent) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          height: 200,
        }}
        className={classes.card}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box>
            <Typography
              typography="body2"
              fontSize={18}
              sx={{ pt: 3.75, pb: 4 }}
            >
              1. Контактная информация
            </Typography>
            <TextField
              sx={{
                mr: 2,
                width: 363,
              }}
              InputProps={{
                classes: { input: classes.input },
              }}
              className={classes.input}
              placeholder="Имя"
            />
            <MuiTelInput
              sx={{ width: 363 }}
              value={value}
              onChange={handleChange}
              InputProps={{
                classes: { input: classes.input },
              }}
              placeholder="Телефон"
              className={classes.input}
            />
          </Box>
        </Box>
      </Box>
      <Box
        className={classes.card}
        sx={{
          height: 456,
        }}
      >
        <Box sx={{ pl: 3.75, pt: 3.75 }}>
          <Typography typography="body2" fontSize={18} sx={{ mb: 3.875 }}>
            2. Доставка
          </Typography>
          <Box sx={{ display: 'flex', mb: 3.75 }}>
            <Button
              value="delivery"
              onClick={() => setDeliveryType('delivery')}
              className={
                deliveryType === 'delivery'
                  ? classes.btnClkd
                  : classes.btnUnclkd
              }
              sx={{
                width: 181,
                height: 60,
                borderRadius: '10px 0px 0px 10px',
              }}
            >
              <Typography typography="body2">Доставка</Typography>
            </Button>
            <Button
              onClick={() => setDeliveryType('pickup')}
              className={
                deliveryType === 'pickup' ? classes.btnClkd : classes.btnUnclkd
              }
              sx={{
                width: 181,
                height: 60,
                borderRadius: '0px 10px 10px 0px',
                border: '1px solid #72A479',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography typography={'body2'}>Самовывоз</Typography>
            </Button>
          </Box>
          {deliveryType === 'delivery' ? (
            <>
              <Typography typography="body2" sx={{ mb: 2.75 }}>
                Адрес доставки
              </Typography>
              <Box sx={{ display: 'flex', mb: 1.875 }}>
                <TextField
                  sx={{ width: 413, mr: 1.875 }}
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  className={classes.input}
                  placeholder="Укажите улицу"
                />
                <TextField
                  sx={{ width: 173 }}
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  className={classes.input}
                  placeholder="Номер дома"
                />
              </Box>
              <Box sx={{ display: 'flex', mb: 1.875 }}>
                <TextField
                  sx={{ width: 225, mr: 1.875 }}
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  className={classes.input}
                  placeholder="№ квартиры/офиса"
                />
                <TextField
                  sx={{ width: 173, mr: 1.875 }}
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  className={classes.input}
                  placeholder="Подъезд"
                />
                <TextField
                  sx={{ width: 173 }}
                  InputProps={{
                    classes: { input: classes.input },
                  }}
                  className={classes.input}
                  placeholder="Этаж"
                />
              </Box>
              <TextField
                sx={{ width: 601 }}
                InputProps={{
                  classes: { input: classes.input },
                }}
                className={classes.input}
                placeholder="Комментарий"
              />
            </>
          ) : (
            <>
              <Typography sx={{ mb: 2.5 }} typography="body2">
                Выберите адрес
              </Typography>
              <Select
                className={classes.select}
                onChange={onChangeAddress}
                value={address}
                sx={{
                  width: 363,
                  color: 'white',
                  borderRadius: '10px',
                  '& .MuiSvgIcon-root': {
                    color: '#65906B',
                  },
                }}
              >
                <MenuItem sx={{ color: 'black' }} value={'1'}>
                  г.Киев, ул.Хрещатик, д.14
                </MenuItem>
                <MenuItem sx={{ color: 'black' }} value={'2'}>
                  г.Киев, ул.Грушевского, д.4
                </MenuItem>
                <MenuItem sx={{ color: 'black' }} value={'3'}>
                  г.Киев, пр.Победы, д.37
                </MenuItem>
              </Select>
            </>
          )}
        </Box>
      </Box>
      <Box className={classes.card} sx={{ height: 249 }}>
        <Box sx={{ pl: 3.75, pt: 3.75 }}>
          <Typography typography="body2" fontSize={18} sx={{ mb: 3.875 }}>
            3. Оплатить
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button
              onClick={() => setPaymentType('online')}
              className={
                paymentType === 'online' ? classes.btnClkd : classes.btnUnclkd
              }
              sx={{
                width: 181,
                height: 60,
                borderRadius: '10px 0px 0px 10px',
              }}
            >
              <Typography typography="body2">Оплата онлайн</Typography>
            </Button>
            <Button
              onClick={() => setPaymentType('card')}
              className={
                paymentType === 'card' ? classes.btnClkd : classes.btnUnclkd
              }
              sx={{
                width: 181,
                height: 60,
                borderRadius: '0px 0px 0px 0px',
              }}
            >
              <Typography typography={'body2'}>Курьеру картой</Typography>
            </Button>
            <Button
              onClick={() => setPaymentType('cash')}
              className={
                paymentType === 'cash' ? classes.btnClkd : classes.btnUnclkd
              }
              sx={{
                width: 181,
                height: 60,
                borderRadius: '0px 10px 10px 0px',
              }}
            >
              <Typography typography={'body2'}>Наличными</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        className={classes.card}
        sx={{
          height: 300,
        }}
      >
        <Box sx={{ pl: 3.75, pt: 3.75, pr: 3.75 }}>
          <Typography typography="body2" fontSize={18} sx={{ mb: 3.875 }}>
            4. Когда доставить
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <Button
              onClick={() => setDeliveryTime('asap')}
              className={
                deliveryTime === 'asap' ? classes.btnClkd : classes.btnUnclkd
              }
              sx={{
                width: 181,
                height: 60,
                borderRadius: '10px 0px 0px 10px',
              }}
            >
              <Typography typography="body2">В ближайшее время</Typography>
            </Button>
            <Button
              onClick={() => setDeliveryTime('intime')}
              className={
                deliveryTime === 'intime' ? classes.btnClkd : classes.btnUnclkd
              }
              sx={{
                width: 181,
                height: 60,
                borderRadius: '0px 10px 10px 0px',
              }}
            >
              <Typography typography={'body2'}>Ко времени</Typography>
            </Button>
          </Box>
          {deliveryTime === 'asap' ? (
            <Typography
              typography="body2"
              sx={{
                fontSize: 20,
                mt: 7,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Доставим через 40 минут
            </Typography>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <input
                type="datetime-local"
                name="datetime"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'inherit',
                  color: '#fff',
                  width: 300,
                  height: 58,
                  borderRadius: '10px',
                  fontSize: 16,
                  fontWeight: 700,
                  padding: '0px 20px',
                }}
              />
            </Box>
          )}
        </Box>
      </Box>
      <Box
        className={classes.card}
        sx={{
          height: 85,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            sx={{
              '& .MuiSvgIcon-root': {
                fill: '#fff',
              },
            }}
          />
          <Typography sx={{ fontSize: 13, mr: 7 }}>
            Я согласен на обработку моих перс. данных в соответствии с Условиями
          </Typography>
          <Button
            sx={{
              width: 209,
              height: 51,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Typography typography={'body2'}>Офромить заказ</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default OrderDertails;
