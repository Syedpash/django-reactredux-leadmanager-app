from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

# User serializer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        # if you need extra arguments
        extra_kwargs = {'password':{'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
            )
        return user
# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        # authenticates the user
        user = authenticate(**data)

        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


