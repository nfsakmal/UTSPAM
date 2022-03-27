import React, { Component } from 'react';
import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    const navigation = this.props.navigation;
    const buat_tiket = () => {navigation.navigate('pemesanan')};
    const ke_batal = () => {navigation.navigate('batal')}

    return (
      <View style = {{
        flex : 1
      }}>
        <View style = {{
          flex : 1, 
          padding : 10, 
          backgroundColor : 'white',
          marginTop : 50,
          marginBottom : 100,
          marginLeft : 25,
          marginRight :25,
          elevation : 25,
          }}>
          <View style = {{
            flex : 1,
            alignItems : 'center',
            marginTop : 1
          }}>
            <Text style = {{
              color : 'blue',
              fontWeight : 'bold',
              fontSize : 35
            }}>
              Kapalzy  
            </Text>
          </View>
          <View style = {{
            flex : 1
          }}>
           <Text>
              Pelabuhan Awal
          </Text>
          <View style = {{flexDirection : 'row'}}>
            <Image style={{
              width : 25,
              height : 25,
              marginLeft : 5,
              marginRight : 5
            }}
            source = {require('../assets/ship.png')}
            />
            <TextInput style = {{
              width : 275,
              height : 35,
              backgroundColor :'white',
              borderWidth : 1,
              borderRadius : 3
            }}
            placeholder = "Pilih Pelabuhan Awal"
            />
          </View>
          </View>

          <View style = {{
            flex : 1
          }}>
           <Text>
              Pelabuhan Tujuan
          </Text>
          <View style = {{flexDirection : 'row'}}>
            <Image style={{
              width : 25,
              height : 25,
              marginLeft : 5,
              marginRight : 5
            }}
            source = {require('../assets/ship.png')}
            />
            <TextInput style = {{
              width : 275,
              height : 35,
              backgroundColor :'white',
              borderWidth : 1,
              borderRadius : 3
            }}
            placeholder = "Pilih Pelabuhan Tujuan"
            />
          </View>
          </View>

          <View style = {{
            flex : 1
          }}>
           <Text>
              Kelas Layanan
          </Text>
          <View style = {{flexDirection : 'row'}}>
            <Image style={{
              width : 25,
              height : 25,
              marginLeft : 5,
              marginRight : 5
            }}
            source = {require('../assets/passenger.png')}
            />
            <TextInput style = {{
              width : 275,
              height : 35,
              backgroundColor :'white',
              borderWidth : 1,
              borderRadius : 3
            }}
            placeholder = "Pilih Kelas Layanan"
            />
          </View>
          </View>

          <View style = {{
            flex : 1
          }}>
           <Text>
              Tanggal Masuk Pelabuhan
          </Text>
          <View style = {{flexDirection : 'row'}}>
            <Image style={{
              width : 25,
              height : 25,
              marginLeft : 5,
              marginRight : 5
            }}
            source = {require('../assets/calendar.png')}
            />
            <TextInput style = {{
              width : 275,
              height : 35,
              backgroundColor :'white',
              borderWidth : 1,
              borderRadius : 3
            }}
            placeholder = "Pilih Tanggal Masuk Pelabuhan"
            />
          </View>
          </View>

          <View style = {{
            flex : 1
          }}>
           <Text>
              Jam Masuk Pelabuhan
          </Text>
          <View style = {{flexDirection : 'row'}}>
            <Image style={{
              width : 25,
              height : 25,
              marginLeft : 5,
              marginRight : 5
            }}
            source = {require('../assets/clock.png')}
            />
            <TextInput style = {{
              width : 275,
              height : 35,
              backgroundColor :'white',
              borderWidth : 1,
              borderRadius : 3
            }}
            placeholder = "Pilih Jam Masuk Pelabuhan"
            />
          </View>
          </View>

          <View style = {{
            flex : 1
          }}>
           <Text>
              Jumlah Penumpang
          </Text>
          <View style = {{flexDirection : 'row'}}>
            <Image style={{
              width : 25,
              height : 25,
              marginLeft : 5,
              marginRight : 5
            }}
            source = {require('../assets/ship.png')}
            />
            <TextInput style = {{
              width : 275,
              height : 35,
              backgroundColor :'white',
              borderWidth : 1,
              borderRadius : 3
            }}
            placeholder = "Pilih Jumlah Penumpang"
            />
          </View>
          </View>
          <TouchableOpacity 
            onPress={buat_tiket}
            style ={{
                backgroundColor : 'orange',
                justifyContent : 'center',
                alignItems : 'center',
                width : 325,
                height : 50
            }}>
            <Text>
              Buat Tiket
            </Text>
          </TouchableOpacity>
          </View>

          <View style = {{
            padding : 10, 
            backgroundColor : 'blue',
            marginTop : 3,
            marginBottom : 0,
            marginLeft : 0,
            marginRight :0,
            elevation : 25,
            height : 75,
            flexDirection : 'row'
          }}>
            <TouchableOpacity style = {{
              marginHorizontal : 10,
              alignItems : 'center',
              justifyContent : 'center'
            }}>
              <Image style={{
                width : 25,
                height : 25,
              }}
              source = {require('../assets/home.png')}
              /> 
              <Text>
                Beranda
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={buat_tiket}
                style = {{
                    marginHorizontal : 10,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}>
                <Image style={{
                    width : 25,
                    height : 25
                }}
                source = {require('../assets/open-book.png')}
                /> 
                <Text>
                    Pemesanan Saya
                </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={ke_batal}
            style = {{
              marginHorizontal : 10,
              alignItems : 'center',
              justifyContent : 'center'
            }}>
              <Image style={{
                width : 25,
                height : 25
              }}
              source = {require('../assets/cancel.png')}
              /> 
              <Text>
                Pembatalan
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{
              marginHorizontal : 10,
              alignItems : 'center',
              justifyContent : 'center'
            }}>
              <Image style={{
                width : 25,
                height : 25,
              }}
              source = {require('../assets/menu.png')}
              /> 
              <Text>
                Pembatalan
              </Text>
            </TouchableOpacity>

          </View>
          
      </View>
    );
  }
}

export default App;