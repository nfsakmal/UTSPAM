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
    const ke_batal = () => {navigation.navigate('batal')};
    const beranda = () => {navigation.navigate('home')};

    return (
      <View style = {{
        flex : 1
      }}>
        <View style = {{
          backgroundColor : 'blue',
          justifyContent : 'center',
          alignItems : 'center',
          height : 75
        }}>
          <Text style = {{
            fontWeight : 'bold',
            color : 'white'
          }}>
            Daftar Pembatalan
          </Text>
        </View>
        <View style = {{
          alignItems : 'center',
          justifyContent : 'center'
        }}>
          <Image style={{
              width : 150,
              height : 150,
              marginLeft : 5,
              marginRight : 5,
              marginTop : 100
            }}
            source = {require('../assets/empty-box.png')}
            />
            <Text style = {{
              color : 'blue',
              marginTop : 10
            }}>
              Tidak Ada Aktivitas Pembelian Tiket
            </Text>
        </View>
        <View style = {{
            padding : 10, 
            backgroundColor : 'blue',
            marginTop : 500,
            marginBottom : 0,
            marginLeft : 0,
            marginRight :0,
            elevation : 25,
            height : 75,
            flexDirection : 'row'
          }}>
            <TouchableOpacity 
            onPress={beranda}
            style = {{
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